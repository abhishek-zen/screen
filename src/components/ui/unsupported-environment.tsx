
"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export default function UnsupportedEnvironment() {
  return (
    <div className="max-w-lg mx-auto mt-16">
      <Alert variant="destructive">
        <AlertTitle>Unsupported Environment</AlertTitle>
        <AlertDescription>
          <p>Your browser or device is not supported. To ensure the best experience, please use a modern browser such as Chrome, Firefox, or Safari.</p>
          <div className="mt-3">
            <Link
              href="https://docs.coreplatform.example.com/environment-support"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our documentation for alternatives & help.
            </Link>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
