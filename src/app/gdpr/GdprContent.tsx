"use client";

import { Container, Title, Text, List, ThemeIcon, Card } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "@/app/PolicyPage.module.css";

export function GdprContent() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          GDPR Compliance
        </Title>
        <Text c="dimmed" className={classes.lastUpdated}>
          Last Updated: March 2026
        </Text>

        {/* 1. Introduction */}
        <Title order={2} className={classes.sectionTitle}>
          1. Introduction
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting is committed to protecting the privacy and security of
          personal data in accordance with the General Data Protection
          Regulation (GDPR) and applicable data protection laws. This page
          outlines our practices and your rights regarding data protection.
        </Text>

        {/* 2. Privacy Practices */}
        <Title order={2} className={classes.sectionTitle}>
          2. Our Privacy Practices
        </Title>

        <Title order={3} className={classes.subsectionTitle}>
          Minimal Data Collection
        </Title>
        <Text className={classes.paragraph}>
          We only collect personal data that is essential for delivering our
          services. We do not collect unnecessary information and limit data
          gathering to what is required for account management, billing, and
          technical support.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          Secure Partners
        </Title>
        <Text className={classes.paragraph}>
          All third-party service providers we work with are carefully vetted to
          ensure they meet our data protection standards. We maintain strict
          contractual agreements with our partners regarding data handling.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          Email Control
        </Title>
        <Text className={classes.paragraph}>
          We respect your communication preferences. All marketing emails are
          opt-in, and you can opt out at any time. Service-related
          communications essential to your account will continue as necessary.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          Aggregated Data
        </Title>
        <Text className={classes.paragraph}>
          We use anonymized and aggregated analytics data to improve our
          services. This data cannot be used to identify individual users and
          helps us make informed decisions about service improvements.
        </Text>

        {/* 3. Data Processing */}
        <Title order={2} className={classes.sectionTitle}>
          3. Data Processing
        </Title>

        <Title order={3} className={classes.subsectionTitle}>
          Security
        </Title>
        <Text className={classes.paragraph}>
          We employ industry-standard encryption and security measures to
          protect your data during transmission and storage. Our infrastructure
          is regularly audited for vulnerabilities.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          Minimal Access
        </Title>
        <Text className={classes.paragraph}>
          Access to personal data within our organization is restricted to
          personnel who require it on a need-to-know basis for performing their
          duties. All staff are trained in data protection practices.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          Partner Access
        </Title>
        <Text className={classes.paragraph}>
          Third-party partners who process data on our behalf are bound by
          contractual obligations to protect your data and use it only for the
          specified purposes.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          Breach Protocol
        </Title>
        <Text className={classes.paragraph}>
          In the event of a data breach, we will notify affected individuals and
          the relevant supervisory authority within 72 hours of becoming aware
          of the breach, as required by GDPR.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          User Requests
        </Title>
        <Text className={classes.paragraph}>
          We respond to all data subject requests within 30 days. This includes
          requests for access, rectification, erasure, and data portability.
        </Text>

        {/* 4. Your Rights */}
        <Title order={2} className={classes.sectionTitle}>
          4. Your Rights
        </Title>
        <Text className={classes.paragraph}>
          Under the GDPR, you have the following rights regarding your personal
          data:
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
            <strong>Right of Access:</strong> Request a copy of the personal
            data we hold about you
          </List.Item>
          <List.Item>
            <strong>Right to Rectification:</strong> Request correction of
            inaccurate or incomplete data
          </List.Item>
          <List.Item>
            <strong>Right to Erasure:</strong> Request deletion of your personal
            data when it is no longer needed
          </List.Item>
          <List.Item>
            <strong>Right to Restriction:</strong> Request limitation of
            processing of your personal data
          </List.Item>
          <List.Item>
            <strong>Right to Data Portability:</strong> Receive your data in a
            structured, commonly used format
          </List.Item>
          <List.Item>
            <strong>Right to Object:</strong> Object to the processing of your
            personal data for specific purposes
          </List.Item>
        </List>

        {/* Contact */}
        <Card className={classes.contactBox}>
          <Title order={3} mb="sm">
            Contact Us
          </Title>
          <Text className={classes.paragraph}>
            For GDPR-related inquiries or to exercise your data protection
            rights, please contact us:
          </Text>
          <List spacing="xs">
            <List.Item>
              <strong>Privacy:</strong> privacy@moinfo.co.tz
            </List.Item>
            <List.Item>
              <strong>Phone:</strong> +255 689 011 111
            </List.Item>
          </List>
        </Card>
      </Container>
    </section>
  );
}
