"use client";

import { Container, Title, Text, List, ThemeIcon, Card } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "@/app/PolicyPage.module.css";

export function CancellationContent() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          Cancellation Policy
        </Title>
        <Text c="dimmed" className={classes.lastUpdated}>
          Last Updated: March 2026
        </Text>

        <Text className={classes.paragraph}>
          This Cancellation Policy outlines the procedures and terms for
          cancelling services with Moinfo Hosting. Please review these terms
          carefully before requesting a cancellation.
        </Text>

        {/* 1. Cancellation Requests */}
        <Title order={2} className={classes.sectionTitle}>
          1. Cancellation Requests
        </Title>
        <Text className={classes.paragraph}>
          To cancel a service, please submit a cancellation request through our
          support ticket system. A confirmation will be provided once your
          request has been processed. Any third-party services associated with
          your account will be handled accordingly.
        </Text>

        {/* 2. Refund Policy */}
        <Title order={2} className={classes.sectionTitle}>
          2. Refund Policy
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting offers a 30-day money-back guarantee on eligible
          hosting services. Refunds are subject to the following conditions:
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
            Full refund available within 30 days of initial purchase
          </List.Item>
          <List.Item>
            Domain registrations, SSL certificates, and setup fees are
            non-refundable
          </List.Item>
          <List.Item>
            Data migration assistance is available upon request before
            cancellation
          </List.Item>
          <List.Item>
            No refunds will be issued for accounts terminated due to Terms of
            Service violations
          </List.Item>
        </List>

        {/* 3. Post-Period Cancellations */}
        <Title order={2} className={classes.sectionTitle}>
          3. Post-Period Cancellations
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
            Services auto-renew at the end of each billing cycle
          </List.Item>
          <List.Item>
            Outstanding invoices must be cleared before cancellation is
            processed
          </List.Item>
          <List.Item>
            Advance notice is required to prevent renewal charges
          </List.Item>
          <List.Item>
            All account data will be removed after the termination period
          </List.Item>
        </List>

        {/* 4. Free Add-ons */}
        <Title order={2} className={classes.sectionTitle}>
          4. Free Add-ons
        </Title>
        <Text className={classes.paragraph}>
          Free add-ons included with your hosting plan may transition to paid
          services upon cancellation of the primary service. You will have the
          option to continue the add-on at the standard price or transfer it to
          another provider.
        </Text>

        {/* 5. Account Reactivation */}
        <Title order={2} className={classes.sectionTitle}>
          5. Account Reactivation
        </Title>
        <Text className={classes.paragraph}>
          Cancelled accounts may be reactivated within 30 days of cancellation,
          subject to data availability. After 30 days, account data may no
          longer be recoverable.
        </Text>

        {/* 6. Late Fees */}
        <Title order={2} className={classes.sectionTitle}>
          6. Late Fees
        </Title>
        <Text className={classes.paragraph}>
          Late fees may be applied to overdue payments. Clients are encouraged
          to settle invoices promptly to avoid additional charges and potential
          service suspension.
        </Text>

        {/* 7. Cancelled Activation */}
        <Title order={2} className={classes.sectionTitle}>
          7. Cancelled During Activation
        </Title>
        <Text className={classes.paragraph}>
          Services cancelled during the initial setup or activation phase will
          receive a full refund of all charges paid. No cancellation fee applies
          in these cases.
        </Text>

        {/* 8. Disputes */}
        <Title order={2} className={classes.sectionTitle}>
          8. Disputes
        </Title>
        <Text className={classes.paragraph}>
          If you disagree with a cancellation decision or refund amount, please
          submit a dispute through our support ticket system. All disputes will
          be reviewed and resolved within 7 business days.
        </Text>

        {/* 9. Service Downgrades */}
        <Title order={2} className={classes.sectionTitle}>
          9. Service Downgrades
        </Title>
        <Text className={classes.paragraph}>
          Instead of full cancellation, you may choose to downgrade your service
          plan. Prorated billing will apply, and credits for the remaining
          period of your current plan will be applied to your account.
        </Text>

        {/* 10. Overpayments */}
        <Title order={2} className={classes.sectionTitle}>
          10. Overpayments
        </Title>
        <Text className={classes.paragraph}>
          Any overpayments will be credited to your account balance and can be
          applied to future invoices. You may also request a refund of
          overpayments by contacting our billing team.
        </Text>

        {/* 11. Price Adjustments */}
        <Title order={2} className={classes.sectionTitle}>
          11. Price Adjustments
        </Title>
        <Text className={classes.paragraph}>
          Moinfo Hosting will provide at least 30 days&apos; notice before any
          price changes take effect. If you do not agree with a price change,
          you may cancel your service before the new pricing applies.
        </Text>

        {/* Contact */}
        <Card className={classes.contactBox}>
          <Title order={3} mb="sm">
            Contact Us
          </Title>
          <Text className={classes.paragraph}>
            For cancellation and billing inquiries, please contact us:
          </Text>
          <List spacing="xs">
            <List.Item>
              <strong>Billing:</strong> billing@moinfo.co.tz
            </List.Item>
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
