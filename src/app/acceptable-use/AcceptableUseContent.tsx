"use client";

import { Container, Title, Text, List, ThemeIcon, Card } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "@/app/PolicyPage.module.css";

export function AcceptableUseContent() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          Acceptable Use Policy
        </Title>
        <Text c="dimmed" className={classes.lastUpdated}>
          Last Updated: March 2026
        </Text>

        <Text className={classes.paragraph}>
          This Acceptable Use Policy (AUP) governs the use of all services
          provided by Moinfo Hosting. All clients must comply with this policy
          to maintain a safe, reliable, and fair hosting environment.
        </Text>

        {/* 1. Web Hosting */}
        <Title order={2} className={classes.sectionTitle}>
          1. Web Hosting
        </Title>

        <Title order={3} className={classes.subsectionTitle}>
          1.1 Bandwidth Usage
        </Title>
        <Text className={classes.paragraph}>
          Bandwidth must be used for legitimate website operations only. The
          following are prohibited:
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
          <List.Item>Excessive bandwidth consumption beyond plan limits</List.Item>
          <List.Item>Unauthorized backup downloads or bulk data transfers</List.Item>
          <List.Item>Streaming media or video hosting without appropriate plans</List.Item>
          <List.Item>Operating mirror or proxy sites</List.Item>
        </List>

        <Title order={3} className={classes.subsectionTitle}>
          1.2 CPU Usage
        </Title>
        <Text className={classes.paragraph}>
          CPU resources are shared among clients on shared hosting plans. Users
          must optimize their applications to avoid excessive CPU consumption.
          This includes implementing caching mechanisms, optimizing database
          queries, and keeping scripts efficient.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          1.3 Scripts and Software
        </Title>
        <Text className={classes.paragraph}>
          Only supported and regularly updated scripts and software may be run
          on our servers. The following are prohibited:
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
          <List.Item>Malicious code, backdoors, or exploit scripts</List.Item>
          <List.Item>Anonymous proxy or VPN scripts</List.Item>
          <List.Item>Cryptocurrency mining software</List.Item>
          <List.Item>Outdated or unsupported software with known vulnerabilities</List.Item>
        </List>

        <Title order={3} className={classes.subsectionTitle}>
          1.4 Content Restrictions
        </Title>
        <Text className={classes.paragraph}>
          The following content is strictly prohibited on all Moinfo Hosting
          servers:
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
          <List.Item>Illegal content or material violating Tanzanian law</List.Item>
          <List.Item>Threatening, harassing, or defamatory content</List.Item>
          <List.Item>Adult or pornographic material</List.Item>
          <List.Item>Hacking tools, exploits, or vulnerability scanners</List.Item>
          <List.Item>Malware, viruses, or trojans</List.Item>
          <List.Item>Pirated software or copyrighted material</List.Item>
          <List.Item>Phishing pages or deceptive websites</List.Item>
        </List>

        <Title order={3} className={classes.subsectionTitle}>
          1.5 Cron Jobs
        </Title>
        <Text className={classes.paragraph}>
          Cron jobs must be scheduled at appropriate intervals and must not
          consume excessive server resources. Long-running or
          resource-intensive cron jobs may be restricted or terminated to ensure
          fair resource allocation for all clients.
        </Text>

        {/* 2. Email */}
        <Title order={2} className={classes.sectionTitle}>
          2. Email
        </Title>

        <Title order={3} className={classes.subsectionTitle}>
          2.1 Spam Prevention
        </Title>
        <Text className={classes.paragraph}>
          The following email activities are strictly prohibited:
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
          <List.Item>Sending unsolicited bulk email (spam)</List.Item>
          <List.Item>Harvesting email addresses from websites or directories</List.Item>
          <List.Item>Using forged or misleading email headers</List.Item>
          <List.Item>Operating open mail relays</List.Item>
        </List>

        <Title order={3} className={classes.subsectionTitle}>
          2.2 Bulk Messaging
        </Title>
        <Text className={classes.paragraph}>
          Legitimate bulk email must comply with volume limits defined by your
          plan. All bulk messages must include a clear and functional
          unsubscribe mechanism. Recipients must have opted in to receive your
          communications.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          2.3 Zero Tolerance
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting maintains a zero-tolerance policy for spam. Violations
          may result in:
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
          <List.Item>Immediate account suspension</List.Item>
          <List.Item>Clean-up and remediation fees</List.Item>
          <List.Item>IP address and domain blacklisting</List.Item>
          <List.Item>Permanent account termination for repeat offenders</List.Item>
        </List>

        {/* 3. Dedicated Servers */}
        <Title order={2} className={classes.sectionTitle}>
          3. Dedicated Servers
        </Title>

        <Title order={3} className={classes.subsectionTitle}>
          3.1 Security Responsibilities
        </Title>
        <Text className={classes.paragraph}>
          Dedicated server clients are responsible for:
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
          <List.Item>Keeping software patched and up to date</List.Item>
          <List.Item>Configuring and maintaining firewalls</List.Item>
          <List.Item>Monitoring for unauthorized access or compromise</List.Item>
          <List.Item>Reporting any security breaches or compromises promptly</List.Item>
        </List>

        <Title order={3} className={classes.subsectionTitle}>
          3.2 Network Usage
        </Title>
        <Text className={classes.paragraph}>
          The following network activities are strictly prohibited:
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
          <List.Item>Port scanning or network reconnaissance</List.Item>
          <List.Item>Denial-of-service (DoS) attacks or participation in DDoS</List.Item>
          <List.Item>IP address spoofing or packet manipulation</List.Item>
        </List>

        {/* 4. General */}
        <Title order={2} className={classes.sectionTitle}>
          4. General Provisions
        </Title>

        <Title order={3} className={classes.subsectionTitle}>
          4.1 Law Enforcement
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting will comply with all lawful requests from law
          enforcement agencies and regulatory authorities. We may be required
          to disclose client information or account data in response to valid
          legal processes.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          4.2 Suspension and Termination
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting reserves the right to suspend or terminate services
          for:
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
          <List.Item>Violations of this Acceptable Use Policy</List.Item>
          <List.Item>Legal requirements or court orders</List.Item>
          <List.Item>Excessive resource abuse affecting other clients</List.Item>
          <List.Item>Non-payment of invoices</List.Item>
        </List>

        <Title order={3} className={classes.subsectionTitle}>
          4.3 Communication
        </Title>
        <Text className={classes.paragraph}>
          All communication regarding policy violations or account issues will
          be conducted through support tickets or email. We aim to respond to
          all inquiries within defined response timeframes based on issue
          priority.
        </Text>

        {/* 5. Liability */}
        <Title order={2} className={classes.sectionTitle}>
          5. Liability
        </Title>

        <Title order={3} className={classes.subsectionTitle}>
          5.1 Limitation of Damages
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting&apos;s liability is limited to the fees paid for the
          affected service during the period of disruption. We are not liable
          for indirect, incidental, or consequential damages arising from the
          use of our services.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          5.2 Severability
        </Title>
        <Text className={classes.paragraph}>
          If any provision of this policy is found to be invalid or
          unenforceable, the remaining provisions shall continue in full force
          and effect.
        </Text>

        <Title order={3} className={classes.subsectionTitle}>
          5.3 Policy Changes
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting reserves the right to modify this Acceptable Use
          Policy at any time. Changes will be communicated to clients via email
          or through our client portal. Continued use of our services
          constitutes acceptance of the updated policy.
        </Text>

        {/* Contact */}
        <Card className={classes.contactBox}>
          <Title order={3} mb="sm">
            Report a Violation
          </Title>
          <Text className={classes.paragraph}>
            To report an abuse or policy violation, please contact us:
          </Text>
          <List spacing="xs">
            <List.Item>
              <strong>Abuse Reports:</strong> abuse@moinfo.co.tz
            </List.Item>
            <List.Item>
              <strong>General:</strong> info@moinfo.co.tz
            </List.Item>
          </List>
        </Card>
      </Container>
    </section>
  );
}
