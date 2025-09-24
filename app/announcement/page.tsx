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
import type { Models } from "appwrite";
import { useEffect, useState } from 'react';

interface AnnouncementRow extends Models.DefaultRow {
    title: string;
    text: string;
    summary: string;
    $createdAt: string;
}

export default function Announcements() {
    const [announcements, setAnnouncements] = useState<AnnouncementRow[]>([]);
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

                // map 转换，并断言为 AnnouncementRow
                const mapped: AnnouncementRow[] = result.rows.map((row) => ({
                    $id: row.$id,
                    title: (row as any).title || "No Title",
                    text: (row as any).text || "No Content",
                    summary: (row as any).text
                        ? (row as any).text.slice(0, 100) + ((row as any).text.length > 100 ? "..." : "")
                        : "No Summary",
                    $createdAt: (row as any).$createdAt?.$date || (row as any).$createdAt || '', // 保留你要求的定义
                })) as AnnouncementRow[];

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
        window.location.hash = id;
        setOpenId(id);
    };
    const handleClose = () => {
        setOpenId(null);
        if (window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        } else {
            window.location.hash = '';
        }
    };

    const currentAnnouncement = announcements.find(a => a.$id === openId);

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return isNaN(date.getTime()) ? 'Invalid Date' : date.toLocaleString();
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
