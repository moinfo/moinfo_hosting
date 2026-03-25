"use client";

import { Container, Title, Text, List, ThemeIcon, Card } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "@/app/PolicyPage.module.css";

export function HostingPolicyContent() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          Hosting Policy
        </Title>
        <Text c="dimmed" className={classes.lastUpdated}>
          Last Updated: March 2026
        </Text>

        <Text className={classes.paragraph}>
          This Hosting Policy outlines the rules, guidelines, and expectations
          for all clients using Moinfo Hosting services. By using our hosting
          services, you agree to comply with this policy.
        </Text>

        {/* 1. Acceptable Use */}
        <Title order={2} className={classes.sectionTitle}>
          1. Acceptable Use
        </Title>
        <Text className={classes.paragraph}>
          All hosting services must be used for lawful purposes only. The
          following activities are strictly prohibited:
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
          <List.Item>Distribution of malware or malicious software</List.Item>
          <List.Item>Sending unsolicited bulk email (spam)</List.Item>
          <List.Item>Phishing or fraudulent activities</List.Item>
          <List.Item>Copyright or intellectual property infringement</List.Item>
          <List.Item>Abusive or threatening behavior toward staff or other users</List.Item>
        </List>

        {/* 2. Prohibited Content */}
        <Title order={2} className={classes.sectionTitle}>
          2. Prohibited Content
        </Title>
        <Text className={classes.paragraph}>
          The following types of content are not permitted on our servers:
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
          <List.Item>Illegal materials or content that violates Tanzanian law</List.Item>
          <List.Item>Malware, viruses, or harmful scripts</List.Item>
          <List.Item>Pirated software or copyrighted material without authorization</List.Item>
          <List.Item>Phishing pages or deceptive content</List.Item>
          <List.Item>Adult or pornographic content</List.Item>
          <List.Item>Gambling-related content</List.Item>
        </List>

        {/* 3. Resource Limits */}
        <Title order={2} className={classes.sectionTitle}>
          3. Resource Limits
        </Title>
        <Text className={classes.paragraph}>
          Each hosting plan comes with specific resource allocations. These
          include storage space, bandwidth, CPU usage, email accounts, and
          database limits. If you exceed your allocated resources, you may be
          asked to upgrade your plan. Upgrade options are always available to
          accommodate growing needs.
        </Text>

        {/* 4. Billing */}
        <Title order={2} className={classes.sectionTitle}>
          4. Billing
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
          <List.Item>All prices are quoted in Tanzanian Shillings (TZS)</List.Item>
          <List.Item>
            We accept multiple payment methods including mobile money and bank
            transfer
          </List.Item>
          <List.Item>Invoices are generated automatically before the billing cycle</List.Item>
          <List.Item>
            A grace period is provided for late payments before suspension
          </List.Item>
          <List.Item>
            Accounts with overdue invoices may be automatically suspended
          </List.Item>
        </List>

        {/* 5. Backups */}
        <Title order={2} className={classes.sectionTitle}>
          5. Backups
        </Title>
        <Text className={classes.paragraph}>
          System-level backups are maintained by Moinfo Hosting; however,
          backups are not included in standard hosting packages. Courtesy
          restorations may be provided on a best-effort basis but are not
          guaranteed. Clients are strongly encouraged to maintain their own
          independent backups of all data.
        </Text>

        {/* 6. Security */}
        <Title order={2} className={classes.sectionTitle}>
          6. Security
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
          <List.Item>Free SSL certificates are available for all hosting accounts</List.Item>
          <List.Item>Server-level firewalls protect against common threats</List.Item>
          <List.Item>
            Strong password protocols are enforced for account security
          </List.Item>
          <List.Item>Regular software and security updates are applied</List.Item>
          <List.Item>
            Clients must report any security incidents or vulnerabilities
            promptly
          </List.Item>
        </List>

        {/* 7. Uptime */}
        <Title order={2} className={classes.sectionTitle}>
          7. Uptime Guarantee
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting strives to deliver reliable service with a strong
          uptime guarantee. Scheduled maintenance windows will be communicated
          in advance whenever possible. In the event of unplanned downtime
          exceeding our guaranteed levels, service credits may be applied to
          affected accounts.
        </Text>

        {/* 8. Suspension */}
        <Title order={2} className={classes.sectionTitle}>
          8. Account Suspension
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting reserves the right to suspend accounts under the
          following circumstances:
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
          <List.Item>Violation of this Hosting Policy or our Terms of Service</List.Item>
          <List.Item>Non-payment of invoices after the grace period</List.Item>
          <List.Item>
            Security threats originating from the client&apos;s account
          </List.Item>
        </List>
        <Text className={classes.paragraph}>
          Suspended clients will be notified and may appeal the decision.
          Reinstatement is available once the issue is resolved. Repeated
          violations may result in permanent termination.
        </Text>

        {/* 9. Domain Services */}
        <Title order={2} className={classes.sectionTitle}>
          9. Domain Services
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
          <List.Item>Domain registration and renewal services</List.Item>
          <List.Item>Domain transfer assistance</List.Item>
          <List.Item>DNS management tools</List.Item>
          <List.Item>
            Expiry notifications sent in advance to prevent accidental lapses
          </List.Item>
        </List>

        {/* 10. Policy Changes */}
        <Title order={2} className={classes.sectionTitle}>
          10. Policy Changes
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting reserves the right to modify this Hosting Policy at any
          time. Clients will be notified of significant changes via email or
          through our client portal. Continued use of our services constitutes
          acceptance of the updated policy.
        </Text>

        {/* Contact */}
        <Card className={classes.contactBox}>
          <Title order={3} mb="sm">
            Contact Us
          </Title>
          <Text className={classes.paragraph}>
            If you have questions about this Hosting Policy, please reach out:
          </Text>
          <List spacing="xs">
            <List.Item>
              <strong>Support:</strong> support@moinfo.co.tz
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
