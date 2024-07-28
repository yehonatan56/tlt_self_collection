import { useEffect, useState } from "react";
import { remult } from "remult";
import { Item } from "../sherd/item";
import { Checkbox, Table } from "@mantine/core";
import ListItem from "./item";
const repo = remult.repo(Item);
const fetchItems = async () => {
  return await repo.find({ limit: 10 });
};
export default function List() {
  const [items, setItems] = useState<Item[]>([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    fetchItems().then((items) => setItems(items));
  }, []);

  return (
    <div>
      <h1>רשימת פריטים</h1>
      <Table border={2}>
        <Table.Thead>
          <Table.Th>שם</Table.Th>
          <Table.Th>מחיר</Table.Th>
          <Table.Th>טלפון</Table.Th>
          <Table.Th>סטטוס</Table.Th>
          <Table.Th>מיקום איסוף</Table.Th>
        </Table.Thead>
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </Table>
    </div>
  );
}
