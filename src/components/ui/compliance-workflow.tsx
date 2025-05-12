
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { toast } from "@/components/ui/sonner";

export default function ComplianceWorkflow() {
  // Example state for events - in real app, fetch from Supabase
  const [logs, setLogs] = useState([
    { id: "1", event_type: "Consent Collected", created_at: "2024-06-01T12:00:00Z" },
    { id: "2", event_type: "Data Accessed", created_at: "2024-06-03T09:23:00Z" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleLogEvent = async () => {
    setLoading(true);
    // In real implementation, would call server action or API to log event
    setTimeout(() => {
      setLogs([
        ...logs,
        {
          id: String(Date.now()),
          event_type: "Consent Collected",
          created_at: new Date().toISOString(),
        }
      ]);
      setLoading(false);
      toast.success("Consent event logged!");
    }, 900);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Compliance Workflow</h1>
      <p className="mb-6 text-muted-foreground">
        Manage user rights, collect consent, and review audit logs to ensure compliance.
      </p>
      <Card className="mb-8 p-4 flex items-center justify-between">
        <div>
          <div className="font-medium mb-1">Consent Management</div>
          <div className="text-sm text-muted-foreground">Collect new user consent for data processing.</div>
        </div>
        <Button onClick={handleLogEvent} disabled={loading}>
          {loading ? "Logging..." : "Collect Consent"}
        </Button>
      </Card>

      <div className="mb-4 font-semibold">Audit Log</div>
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.event_type}</TableCell>
                <TableCell>
                  {new Date(log.created_at).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
