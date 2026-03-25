"use client";

import { Container, Title, Text, List, ThemeIcon, Card } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "@/app/PolicyPage.module.css";

export function TransferContent() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={1} className={classes.title}>
          Transfer to Us
        </Title>
        <Text c="dimmed" className={classes.lastUpdated}>
          Last Updated: March 2026
        </Text>

        <Text className={classes.paragraph}>
          Moving to Moinfo Hosting has never been easier. We offer free website
          migration services to help you transition seamlessly from your current
          provider. Our expert team handles the entire process so you can focus
          on your business.
        </Text>

        {/* 1. Free Migration */}
        <Title order={2} className={classes.sectionTitle}>
          1. Free Migration Services
        </Title>
        <Text className={classes.paragraph}>
          Each hosting plan includes a number of free migrations performed by
          our technical team:
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
            <strong>Shared Hosting:</strong> 1 free website migration
          </List.Item>
          <List.Item>
            <strong>Reseller Starter:</strong> Up to 10 free website migrations
          </List.Item>
          <List.Item>
            <strong>Reseller Premium:</strong> Up to 35 free website migrations
          </List.Item>
          <List.Item>
            <strong>VPS Hosting:</strong> Up to 35 free website migrations
          </List.Item>
          <List.Item>
            <strong>Dedicated Server:</strong> Up to 35 free website migrations
          </List.Item>
        </List>

        <Title order={3} className={classes.subsectionTitle}>
          Migration Notes
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
            cPanel-to-cPanel migrations are fully supported for the fastest
            transfer experience
          </List.Item>
          <List.Item>
            Email accounts and data are included in the migration
          </List.Item>
          <List.Item>
            Existing backups should be verified before migration begins
          </List.Item>
          <List.Item>
            Manual migrations are available for non-cPanel environments
          </List.Item>
          <List.Item>
            Add-on domains and subdomains are supported in all transfers
          </List.Item>
        </List>

        {/* 2. Additional Migration Services */}
        <Title order={2} className={classes.sectionTitle}>
          2. Additional Migration Services
        </Title>
        <Text className={classes.paragraph}>
          Need more migrations than your plan includes? Additional website
          migrations are available at a competitive additional cost. Contact our
          sales team for a custom quote based on the number and complexity of
          sites to be transferred.
        </Text>

        {/* 3. Benefits */}
        <Title order={2} className={classes.sectionTitle}>
          3. Benefits of Transferring to Moinfo Hosting
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
            Free migration service — no hidden charges for included transfers
          </List.Item>
          <List.Item>
            Full technical support throughout the transfer process
          </List.Item>
          <List.Item>
            Minimal downtime — most transfers are completed within hours
          </List.Item>
          <List.Item>
            High uptime guarantee on all hosting plans
          </List.Item>
          <List.Item>
            Seamless data transfer with full integrity verification
          </List.Item>
          <List.Item>
            Bulk migration discounts available for large-scale transfers
          </List.Item>
        </List>

        {/* 4. Migration Rules */}
        <Title order={2} className={classes.sectionTitle}>
          4. Migration Rules
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
            Our money-back guarantee applies to all new hosting accounts,
            including transferred sites
          </List.Item>
          <List.Item>
            Migrations are performed server-to-server for maximum speed and
            reliability
          </List.Item>
          <List.Item>
            Free migration limits are per hosting plan — additional transfers
            are billed separately
          </List.Item>
          <List.Item>
            Custom pricing tiers are available for enterprise and bulk
            migrations
          </List.Item>
        </List>

        {/* Contact */}
        <Card className={classes.contactBox}>
          <Title order={3} mb="sm">
            Ready to Transfer?
          </Title>
          <Text className={classes.paragraph}>
            Get started with your free migration today. Our team is ready to
            help:
          </Text>
          <List spacing="xs">
            <List.Item>
              <strong>Sales:</strong> sales@moinfo.co.tz
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
