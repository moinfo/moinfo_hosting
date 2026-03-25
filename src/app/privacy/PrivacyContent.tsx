"use client";

import { Container, Title, Text, List, ThemeIcon, Card } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "@/app/PolicyPage.module.css";

export function PrivacyContent() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          Privacy Policy
        </Title>
        <Text c="dimmed" className={classes.lastUpdated}>
          Last Updated: March 2026
        </Text>

        <Text className={classes.paragraph}>
          At Moinfo Hosting, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our services.
        </Text>

        {/* 1. Information Collection */}
        <Title order={2} className={classes.sectionTitle}>
          1. Information We Collect
        </Title>
        <Text className={classes.paragraph}>
          We collect various types of information to provide and improve our
          services:
        </Text>
        <List
          spacing="xs"
          className={classes.list}
          icon={
            <ThemeIcon size={20} radius="xl" color="teal">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>Personal names and contact information</List.Item>
          <List.Item>Business names and registration details</List.Item>
          <List.Item>Payment and billing details</List.Item>
          <List.Item>Website usage patterns and analytics</List.Item>
          <List.Item>Support interactions and ticket history</List.Item>
          <List.Item>IP addresses and device information</List.Item>
          <List.Item>Form submissions and correspondence</List.Item>
        </List>

        {/* 2. Information Usage */}
        <Title order={2} className={classes.sectionTitle}>
          2. How We Use Your Information
        </Title>
        <Text className={classes.paragraph}>
          We use the information we collect for the following purposes:
        </Text>
        <List
          spacing="xs"
          className={classes.list}
          icon={
            <ThemeIcon size={20} radius="xl" color="teal">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>Delivering and maintaining our hosting services</List.Item>
          <List.Item>Processing payments and managing billing</List.Item>
          <List.Item>
            Sending service notifications and important updates
          </List.Item>
          <List.Item>Improving our products and user experience</List.Item>
          <List.Item>Providing technical support and assistance</List.Item>
          <List.Item>Complying with legal obligations</List.Item>
          <List.Item>Preventing fraud and unauthorized access</List.Item>
        </List>

        {/* 3. Information Sharing */}
        <Title order={2} className={classes.sectionTitle}>
          3. Information Sharing
        </Title>
        <Text className={classes.paragraph}>
          We may share your information with the following parties when
          necessary:
        </Text>
        <List
          spacing="xs"
          className={classes.list}
          icon={
            <ThemeIcon size={20} radius="xl" color="teal">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            Payment processors for transaction handling
          </List.Item>
          <List.Item>
            Service providers who assist in delivering our services
          </List.Item>
          <List.Item>
            Legal authorities when required by law or court order
          </List.Item>
          <List.Item>
            Business partners under strict confidentiality agreements
          </List.Item>
        </List>

        {/* 4. Data Access */}
        <Title order={2} className={classes.sectionTitle}>
          4. Access to Your Data
        </Title>
        <Text className={classes.paragraph}>
          You may request access to the personal information we hold about you
          at any time. We will respond to your request within a reasonable
          timeframe and provide the information in a clear, accessible format.
        </Text>

        {/* 5. Security */}
        <Title order={2} className={classes.sectionTitle}>
          5. Data Security
        </Title>
        <Text className={classes.paragraph}>
          We implement robust security measures to protect your personal
          information:
        </Text>
        <List
          spacing="xs"
          className={classes.list}
          icon={
            <ThemeIcon size={20} radius="xl" color="teal">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            Industry-standard encryption for data in transit and at rest
          </List.Item>
          <List.Item>Secure server infrastructure with access controls</List.Item>
          <List.Item>
            Strict access controls limiting who can view your data
          </List.Item>
          <List.Item>Regular security audits and vulnerability assessments</List.Item>
          <List.Item>
            Strong password protection and authentication protocols
          </List.Item>
        </List>

        {/* 6. User Rights */}
        <Title order={2} className={classes.sectionTitle}>
          6. Your Rights
        </Title>
        <Text className={classes.paragraph}>
          You have the following rights regarding your personal data:
        </Text>
        <List
          spacing="xs"
          className={classes.list}
          icon={
            <ThemeIcon size={20} radius="xl" color="teal">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>Access your personal information we hold</List.Item>
          <List.Item>Correct inaccurate or incomplete data</List.Item>
          <List.Item>Request deletion of your personal data</List.Item>
          <List.Item>Opt out of marketing communications</List.Item>
          <List.Item>Request a copy of your data in a portable format</List.Item>
          <List.Item>Withdraw consent at any time</List.Item>
        </List>

        {/* 7. Cookies */}
        <Title order={2} className={classes.sectionTitle}>
          7. Cookies
        </Title>
        <Text className={classes.paragraph}>
          Our website uses cookies to enhance your experience. The types of
          cookies we use include:
        </Text>
        <List
          spacing="xs"
          className={classes.list}
          icon={
            <ThemeIcon size={20} radius="xl" color="teal">
              <IconCheck size={12} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <strong>Essential Cookies:</strong> Required for basic website
            functionality and security
          </List.Item>
          <List.Item>
            <strong>Analytics Cookies:</strong> Help us understand how visitors
            use our website
          </List.Item>
          <List.Item>
            <strong>Preference Cookies:</strong> Remember your choices and
            settings
          </List.Item>
        </List>

        {/* 8. Data Retention */}
        <Title order={2} className={classes.sectionTitle}>
          8. Data Retention
        </Title>
        <Text className={classes.paragraph}>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this policy, comply with legal
          requirements, and support our legitimate business operations. When
          data is no longer needed, it is securely deleted or anonymized.
        </Text>

        {/* 9. Third-Party Services */}
        <Title order={2} className={classes.sectionTitle}>
          9. Third-Party Services
        </Title>
        <Text className={classes.paragraph}>
          We may use third-party service providers to support our operations.
          These providers are carefully vetted and are required to protect your
          data in accordance with applicable privacy laws and our contractual
          obligations.
        </Text>

        {/* 10. Children's Privacy */}
        <Title order={2} className={classes.sectionTitle}>
          10. Children&apos;s Privacy
        </Title>
        <Text className={classes.paragraph}>
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect personal information from children. If we
          become aware that we have collected data from a minor, we will take
          steps to delete it promptly.
        </Text>

        {/* 11. Policy Changes */}
        <Title order={2} className={classes.sectionTitle}>
          11. Changes to This Policy
        </Title>
        <Text className={classes.paragraph}>
          We may update this Privacy Policy from time to time. Any changes will
          be communicated to users via email or a notice on our website. We
          encourage you to review this policy periodically.
        </Text>

        {/* Contact */}
        <Card className={classes.contactBox}>
          <Title order={3} mb="sm">
            Contact Us
          </Title>
          <Text className={classes.paragraph}>
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
          </Text>
          <List spacing="xs">
            <List.Item>
              <strong>Privacy Inquiries:</strong> privacy@moinfo.co.tz
            </List.Item>
            <List.Item>
              <strong>General Support:</strong> info@moinfo.co.tz
            </List.Item>
          </List>
        </Card>
      </Container>
    </section>
  );
}
