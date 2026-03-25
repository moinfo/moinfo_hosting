"use client";

import { Container, Title, Text, List, ThemeIcon, Card } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "@/app/PolicyPage.module.css";

export function TermsContent() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          Terms of Service
        </Title>
        <Text c="dimmed" className={classes.lastUpdated}>
          Last Updated: January 2024
        </Text>

        <Text className={classes.paragraph}>
          Welcome to Moinfo Hosting. These Terms of Service govern your use of
          our website, products, and services. By accessing or using our
          services, you agree to be bound by these terms.
        </Text>

        {/* 1. Acceptance of Terms */}
        <Title order={2} className={classes.sectionTitle}>
          1. Acceptance of Terms
        </Title>
        <Text className={classes.paragraph}>
          By using any services provided by Moinfo Hosting, you acknowledge that
          you have read, understood, and agree to be bound by these Terms of
          Service. If you do not agree with any part of these terms, you must
          not use our services.
        </Text>

        {/* 2. Services */}
        <Title order={2} className={classes.sectionTitle}>
          2. Services
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting provides a range of internet services including:
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
          <List.Item>Web hosting (shared, VPS, and dedicated servers)</List.Item>
          <List.Item>Domain name registration and management</List.Item>
          <List.Item>Professional website design and development</List.Item>
          <List.Item>Technical support and consultation</List.Item>
        </List>

        {/* 3. Client Responsibilities */}
        <Title order={2} className={classes.sectionTitle}>
          3. Client Responsibilities
        </Title>
        <Text className={classes.paragraph}>
          As a client of Moinfo Hosting, you are responsible for:
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
            Providing accurate and up-to-date account information
          </List.Item>
          <List.Item>
            Maintaining the confidentiality of your account credentials
          </List.Item>
          <List.Item>
            Ensuring all activities under your account comply with applicable
            laws
          </List.Item>
          <List.Item>
            Refraining from unauthorized access to systems or networks
          </List.Item>
          <List.Item>
            Not engaging in malicious activities such as distributing malware or
            spam
          </List.Item>
        </List>

        {/* 4. Payment Terms */}
        <Title order={2} className={classes.sectionTitle}>
          4. Payment Terms
        </Title>
        <Text className={classes.paragraph}>
          Payment is required before service activation. All prices are quoted
          in Tanzanian Shillings (TZS) unless otherwise stated.
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
            Invoices are generated according to your billing cycle
          </List.Item>
          <List.Item>
            Late payments may result in service suspension or termination
          </List.Item>
          <List.Item>
            All transactions are processed in TZS currency
          </List.Item>
          <List.Item>
            Refund requests are subject to our Cancellation Policy
          </List.Item>
        </List>

        {/* 5. Intellectual Property */}
        <Title order={2} className={classes.sectionTitle}>
          5. Intellectual Property
        </Title>
        <Text className={classes.paragraph}>
          All content you upload or create using our services remains your
          property. However, Moinfo Hosting retains all proprietary rights to
          its platform, tools, branding, and intellectual property. You may not
          reproduce, distribute, or create derivative works from our proprietary
          materials without written permission.
        </Text>

        {/* 6. Service Level Agreement */}
        <Title order={2} className={classes.sectionTitle}>
          6. Service Level Agreement
        </Title>
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
            We strive to maintain high uptime for all hosting services
          </List.Item>
          <List.Item>
            Scheduled maintenance will be communicated in advance whenever
            possible
          </List.Item>
          <List.Item>
            Emergency maintenance may be performed without prior notice to
            ensure security and stability
          </List.Item>
          <List.Item>
            Support response timeframes vary by plan and priority level
          </List.Item>
        </List>

        {/* 7. Warranty Disclaimers */}
        <Title order={2} className={classes.sectionTitle}>
          7. Warranty Disclaimers
        </Title>
        <Text className={classes.paragraph}>
          Our services are provided on an &quot;as-is&quot; and
          &quot;as-available&quot; basis. Moinfo Hosting makes no warranties,
          express or implied, regarding the reliability, availability, or
          suitability of our services.
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
            We are not liable for data loss; clients are responsible for
            maintaining their own backups
          </List.Item>
          <List.Item>
            Indirect, incidental, or consequential damages are excluded to the
            fullest extent permitted by law
          </List.Item>
        </List>

        {/* 8. Termination */}
        <Title order={2} className={classes.sectionTitle}>
          8. Termination
        </Title>
        <Text className={classes.paragraph}>
          Either party may terminate the service relationship under the
          following conditions:
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
            Clients may cancel services with appropriate notice as outlined in
            our Cancellation Policy
          </List.Item>
          <List.Item>
            Moinfo Hosting may immediately terminate services for violations of
            these terms
          </List.Item>
          <List.Item>
            Outstanding balances must be settled upon termination
          </List.Item>
          <List.Item>
            Data will be retained for a limited period after termination before
            permanent deletion
          </List.Item>
        </List>

        {/* 9. Modifications */}
        <Title order={2} className={classes.sectionTitle}>
          9. Modifications to Terms
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting reserves the right to modify these Terms of Service at
          any time. Changes will be communicated via email or posted on our
          website. Continued use of our services after modifications constitutes
          acceptance of the updated terms.
        </Text>

        {/* 10. Governing Law */}
        <Title order={2} className={classes.sectionTitle}>
          10. Governing Law
        </Title>
        <Text className={classes.paragraph}>
          These Terms of Service are governed by and construed in accordance
          with the laws of the United Republic of Tanzania. Any disputes arising
          from these terms shall be resolved in the courts of Tanzania.
        </Text>

        {/* Contact */}
        <Card className={classes.contactBox}>
          <Title order={3} mb="sm">
            Contact Us
          </Title>
          <Text className={classes.paragraph}>
            For legal inquiries regarding these Terms of Service, please contact
            us:
          </Text>
          <List spacing="xs">
            <List.Item>
              <strong>Legal:</strong> legal@moinfo.co.tz
            </List.Item>
          </List>
        </Card>
      </Container>
    </section>
  );
}
