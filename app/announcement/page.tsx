'use client'
import NavBar from '@/components/NavBar';
import { tablesDB } from '@/lib/appwrite';
import CloseIcon from '@mui/icons-material/Close';
import {
    Alert,
    Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Snackbar,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

interface Announcement {
    $id: string;
    title: string;
    text: string;
    summary: string;
    $createdAt: string; // ISO 字符串
}

export default function Announcements() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);
    const [openId, setOpenId] = useState<string | null>(null);
    const [tipOpen, setTipOpen] = useState(false);


    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const result = await tablesDB.listRows({
                    databaseId: '68d3743f002604f71199',
                    tableId: 'announcement',
                    queries: [],
                });

                const mapped: Announcement[] = result.rows.map((row: any) => ({
                    $id: row.$id,
                    title: row.title || 'No Title',
                    text: row.text || 'No Content',
                    summary: row.text ? row.text.slice(0, 100) + (row.text.length > 100 ? '...' : '') : 'No Summary',
                    $createdAt: row.$createdAt?.$date || row.$createdAt || '', // 如果是 Appwrite DateTime 对象，用 $date，否则用原值
                }));


                setAnnouncements(mapped);

                // 检查 hash
                const hashId = window.location.hash.replace('#', '');
                if (hashId) {
                    const found = mapped.find(a => a.$id === hashId);
                    if (found) setOpenId(found.$id);
                    else setTipOpen(true);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnnouncements();
    }, []);

    const handleOpen = (id: string) => {
        window.location.hash = id; // 更新 URL hash
        setOpenId(id);
    };
    const handleClose = () => {
        setOpenId(null);
        // 清除 URL hash
        if (window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        } else {
            window.location.hash = '';
        }
    };

    const currentAnnouncement = announcements.find(a => a.$id === openId);

    // 本地化时间格式函数
    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString(); // 默认浏览器 locale
    };

    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <NavBar />

            <Container sx={{ py: 10 }}>
                <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom textAlign="center">
                    Announcements
                </Typography>

                {loading ? (
                    <Box display="flex" justifyContent="center" mt={4}>
                        <CircularProgress />
                    </Box>
                ) : announcements.length === 0 ? (
                    <Typography textAlign="center" mt={4} color="text.secondary">
                        No announcements found.
                    </Typography>
                ) : (
                    <Box
                        display="grid"
                        gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
                        gap={3}
                        mt={4}
                    >
                        {announcements.map((item) => (
                            <Card
                                key={item.$id}
                                sx={{ transition: '0.3s', cursor: 'pointer', '&:hover': { boxShadow: 6 } }}
                                onClick={() => handleOpen(item.$id)}
                            >
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography color="text.secondary">{item.summary}</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {formatDate(item.$createdAt)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                )}
            </Container>

            {/* 弹窗显示详情 */}
            <Dialog open={!!currentAnnouncement} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>
                    {currentAnnouncement?.title}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {currentAnnouncement && formatDate(currentAnnouncement.$createdAt)}
                    </Typography>
                    <Typography>{currentAnnouncement?.text}</Typography>
                </DialogContent>
            </Dialog>

            {/* Tip 提示不存在的 id */}
            <Snackbar
                open={tipOpen}
                autoHideDuration={4000}
                onClose={() => setTipOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="warning" variant="filled" onClose={() => setTipOpen(false)}>
                    Announcement not found!
                </Alert>
            </Snackbar>
        </Box>
    );
}
