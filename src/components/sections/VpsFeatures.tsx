"use client";

import { Accordion, Container, Table } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { vpsFeatureSections, vpsPlanNames } from "@/data/vps-features";
import classes from "./ResellerFeatures.module.css";

function CellValue({ value }: { value: string }) {
  if (value === "✓") return <IconCheck size={18} className={classes.check} />;
  if (value === "✗") return <IconX size={18} className={classes.cross} />;
  return <span>{value}</span>;
}

export function VpsFeatures() {
  return (
    <section className={classes.section}>
      <Container size="xl">
        <Accordion variant="separated" radius="md" defaultValue="VPS Plan Features">
          {vpsFeatureSections.map((section) => (
            <Accordion.Item key={section.title} value={section.title}>
              <Accordion.Control className={classes.accordionControl}>
                {section.title}
              </Accordion.Control>
              <Accordion.Panel>
                <div className={classes.tableWrapper}>
                  <Table striped highlightOnHover withColumnBorders className={classes.table}>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className={classes.featureCol}></Table.Th>
                        {vpsPlanNames.map((name) => (
                          <Table.Th key={name} className={classes.planCol}>
                            {name.toUpperCase()}
                          </Table.Th>
                        ))}
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {section.rows.map((row) => (
                        <Table.Tr key={row.name}>
                          <Table.Td className={classes.featureName}>{row.name}</Table.Td>
                          {row.values.map((val, i) => (
                            <Table.Td key={i} className={classes.valueCell}>
                              <CellValue value={val} />
                            </Table.Td>
                          ))}
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
