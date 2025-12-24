"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function Projects() {
  const pdfPath = "/downloads/Rotary Action Plan 2024-25.pdf";
  const pdfUrl = encodeURI(pdfPath);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    // Check if PDF loads successfully
    const checkPdf = async () => {
      try {
        const response = await fetch(pdfUrl, { method: 'HEAD' });
        if (!response.ok) {
          setPdfError(true);
        }
      } catch (error) {
        setPdfError(true);
      }
    };
    checkPdf();
  }, [pdfUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Projects</h1>
      
      {/* PDF Display Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-900" />
              Rotary Action Plan 2024-25
            </CardTitle>
            <Button asChild>
              <a href={pdfUrl} download="Rotary Action Plan 2024-25.pdf">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-full">
            {!pdfError ? (
              <iframe
                src={`${pdfUrl}#toolbar=1`}
                className="w-full h-[calc(100vh-300px)] min-h-[600px] border rounded-lg"
                title="Rotary Action Plan 2024-25"
                onError={() => setPdfError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-[600px] bg-gray-100 rounded-lg">
                <p className="text-gray-600 mb-4">Unable to display PDF. Please download to view.</p>
                <Button asChild>
                  <a href={pdfUrl} download="Rotary Action Plan 2024-25.pdf">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </a>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
