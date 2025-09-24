'use client';

import { Container, Divider, Paper, Typography } from '@mui/material';

export default function PrivacyPage() {
    const sections = [
        {
            title: '1. Data Collection',
            content:
                'We may collect the following information:\n\n' +
                '• Account Information: username, email, password (stored encrypted).\n' +
                '• Usage Data: access logs, operation records, device information, IP addresses.\n' +
                '• Other Information: feedback or materials voluntarily provided by users.',
        },
        {
            title: '2. Data Usage',
            content:
                'Collected information is used to:\n\n' +
                '• Provide and improve our services;\n' +
                '• Analyze and optimize user experience;\n' +
                '• Communicate with users, including notifications and updates.',
        },
        {
            title: '3. Data Protection',
            content:
                'Reasonable technical and administrative measures are taken to protect data security.\n' +
                'Personal information will not be sold or rented to third parties without user consent.',
        },
        {
            title: '4. Cookies and Tracking',
            content:
                'We may use cookies or similar technologies to enhance service experience, but not for selling user information.',
        },
        {
            title: '5. User Rights',
            content:
                '• Access, correct, or delete personal information;\n' +
                '• Withdraw consent or opt out of promotional communications.',
        },
        {
            title: '6. Children’s Privacy',
            content:
                'Our services are not directed to children under 13 years old. If information of children is collected, it will be promptly deleted.',
        },
        {
            title: '7. Policy Updates',
            content:
                'This Privacy Policy may be updated at any time. Updates will be posted on our website. Continued use of the services indicates acceptance of the updated policy.',
        },
    ];

    return (
        <Container
            maxWidth="md"
            sx={{
                py: { xs: 6, sm: 10, md: 16 },
            }}
        >
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
                Pdnode Privacy Policy
            </Typography>

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
