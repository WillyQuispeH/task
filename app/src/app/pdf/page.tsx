"use client";
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "@/components/funtional/MyDocument/MyDocument";
const pdfUrl =
  "https://registroycertificacionate.mineduc.cl/wp-content/uploads/sites/94/2018/03/Formato-Curr%C3%ADculum-V%C3%ADtae.pdf";

const Home = () => (
  <div>
    <PDFViewer width="100%" height="600">
      <iframe
        src={pdfUrl}
        width="100%"
        height="600"
        style={{ border: "none" }}
      />
    </PDFViewer>
  </div>
);

export default Home;
