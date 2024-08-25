import React, { useEffect, useState } from "react";
import { remult } from "remult";
import { Table } from "@mantine/core";
import ResponsivePaginationComponent from "react-responsive-pagination";

import { Item } from "../sherd/item";
import ListItem from "./item";

import "react-responsive-pagination/themes/classic.css";

// todo: set these into a logic files and export the relative functions
const repo = remult.repo(Item);

// todo: create a login the return the total count with repo.count()
const fetchItems = async (page: number) => {
  return await repo.find({ limit: 10, page });
};

export default function List() {
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // todo: get the total pages and store to state
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
      <Table border={2} >
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
          <ListItem key={item.id} item={item} />
        ))}
      </Table>
    </div>
  );
}
