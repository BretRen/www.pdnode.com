'use client';

import { Container, Divider, Paper, Typography } from '@mui/material';

export default function TermsPage() {
    const sections = [
        {
            title: '1. Acceptance of Terms',
            content:
                'By using Pdnode products or services, you agree to comply with all terms of this agreement. If you do not agree, please do not use our services.',
        },
        {
            title: '2. Services',
            content:
                'Pdnode provides software, websites, APIs, or related online services (hereinafter "Services"). We reserve the right to modify or discontinue parts of the Services at any time, with reasonable notice to users when possible.',
        },
        {
            title: '3. User Obligations',
            content:
                'Legal Use: Users must not use Pdnode Services for any illegal activities or infringe the rights of others.\n\nAccount Security: Users are responsible for keeping their account information secure and accountable for all account activities.\n\nNo Abuse: Users must not interfere with, reverse-engineer, or access the Services without authorization.',
        },
        {
            title: '4. Intellectual Property',
            content:
                'All software, documentation, designs, icons, and other materials of Pdnode are protected by intellectual property rights. Unauthorized copying, distribution, or commercial use is prohibited.',
        },
        {
            title: '5. Privacy and Data',
            content:
                'Data generated during the use of the Services will be collected and used in accordance with our Privacy Policy. Please review the Privacy Policy carefully.',
        },
        {
            title: '6. Disclaimer',
            content:
                'Pdnode strives to ensure Service availability but does not guarantee uninterrupted or error-free operation.\nPdnode is not liable for any loss due to force majeure or network issues.',
        },
        {
            title: '7. Modifications and Termination',
            content:
                'We may update this agreement at any time. Updates will be announced on our website. Continued use of the Services indicates acceptance of the updated terms.',
        },
        {
            title: '8. Governing Law and Disputes',
            content:
                'This agreement is governed by applicable law. Disputes should be resolved through friendly negotiation first. If negotiation fails, legal action may be taken in the appropriate courts.',
        },
    ];

    return (
        <Container
            maxWidth="md"
            sx={{
                py: { xs: 6, sm: 10, md: 16 },
            }}
        >
            {/* 标题 */}
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    mb: { xs: 4, sm: 6, md: 10 },
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'primary.main',
                    fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                }}
            >
                Pdnode Terms of Service
            </Typography>

            {/* 条款 */}
            {sections.map((section, idx) => (
                <Paper
                    key={idx}
                    elevation={3}
                    sx={{
                        mb: { xs: 4, sm: 6 },
                        p: { xs: 3, sm: 4, md: 6 },
                        borderRadius: 3,
                        backgroundColor: 'background.paper',
                        transition: 'box-shadow 0.3s',
                        '&:hover': {
                            boxShadow: 6,
                        },
                    }}
                >
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            mb: 2,
                            fontWeight: 'medium',
                            color: 'text.primary',
                            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                        }}
                    >
                        {section.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            whiteSpace: 'pre-line',
                            color: 'text.secondary',
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                            lineHeight: 1.6,
                        }}
                    >
                        {section.content}
                    </Typography>
                    {idx < sections.length - 1 && <Divider sx={{ mt: 3 }} />}
                </Paper>
            ))}
        </Container>
    );
}
