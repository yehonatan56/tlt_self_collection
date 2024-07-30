import { Checkbox, Table } from "@mantine/core";
import { useState } from "react";
import { remult } from "remult";
import { Item } from "../sherd/item";

export default function ListItem({ item: item }: { item: Item }) {
  const [checked, setChecked] = useState(false);
  const repo = remult.repo(Item);
  return (
    <Table.Tr key={item.id}>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>{item.phone}</Table.Td>
      <Table.Td>
        <Checkbox
          checked={checked}
          onChange={(e) => {
            setChecked(e.currentTarget.checked);
            if (e.currentTarget.checked) {
              item.status = "completed";
              repo.save(item);
            } else {
              item.status = "in_progress";
              repo.save(item);
            }
          }}
        />
        {item.status === "in_progress" ? "מחכה לאיסוף" : "נאסף"}{" "}
      </Table.Td>
      <Table.Td>{item.pickupLocation === "rishon" ? "ראשון" : "צפת"}</Table.Td>
    </Table.Tr>
  );
}
