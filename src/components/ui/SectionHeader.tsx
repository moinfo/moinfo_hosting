import { Title, Text, Stack } from "@mantine/core";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <Stack align="center" gap="sm" mb="xl">
      <Title order={2} ta="center" size="h2">
        {title}
      </Title>
      {description && (
        <Text
          c="dimmed"
          ta="center"
          maw={600}
          size="lg"
        >
          {description}
        </Text>
      )}
    </Stack>
  );
}
