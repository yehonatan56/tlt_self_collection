import { useEffect, useState } from "react";
import { remult } from "remult";
import { Item } from "../sherd/item";
import { Table } from "@mantine/core";
import ListItem from "./item";
import ResponsivePaginationComponent from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

const repo = remult.repo(Item);
const fetchItems = async (page: number) => {
  return await repo.find({ limit: 10, page });
};
export default function List() {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchItems(currentPage).then((items) => setItems(items));
  }, [currentPage]);

  return (
    <div>
      <h1>רשימת פריטים</h1>
      <ResponsivePaginationComponent
        current={currentPage}
        total={10}
        onPageChange={setCurrentPage}
      />
      <Table border={2}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>שם</Table.Th>
            <Table.Th>מחיר</Table.Th>
            <Table.Th>טלפון</Table.Th>
            <Table.Th>סטטוס</Table.Th>
            <Table.Th>מיקום איסוף</Table.Th>
          </Table.Tr>
        </Table.Thead>
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </Table>
    </div>
  );
}
