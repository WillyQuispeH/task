// src/app/crud/page.tsx
import CrudClient from "@/components/funtional/CrudClient";
import { Suspense } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
}

const CrudPage = async () => {
  return (
    <div>
      <h1>CRUD Operations</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CrudClient />
      </Suspense>
    </div>
  );
};

export default CrudPage;
