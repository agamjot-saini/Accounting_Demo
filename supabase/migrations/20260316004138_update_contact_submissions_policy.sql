/*
  # Update contact submissions insert policy

  1. Security Changes
    - Drop existing permissive INSERT policy
    - Add new INSERT policy that validates required fields are not empty
    - Ensures only valid submissions with name, email, phone, and service are accepted
*/

DROP POLICY IF EXISTS "Allow public form submissions" ON contact_submissions;

CREATE POLICY "Allow public form submissions with validation"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    full_name <> '' AND
    email <> '' AND
    phone <> '' AND
    service_needed <> ''
  );
