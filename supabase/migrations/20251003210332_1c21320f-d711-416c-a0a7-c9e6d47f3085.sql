-- Add explicit UPDATE and DELETE policies for contact_submissions
CREATE POLICY "Only admins can update contact submissions"
ON public.contact_submissions
FOR UPDATE
USING (public.current_user_is_admin());

CREATE POLICY "Only admins can delete contact submissions"
ON public.contact_submissions
FOR DELETE
USING (public.current_user_is_admin());

-- Add explicit UPDATE and DELETE policies for email_subscriptions
CREATE POLICY "Only admins can update email subscriptions"
ON public.email_subscriptions
FOR UPDATE
USING (public.current_user_is_admin());

CREATE POLICY "Only admins can delete email subscriptions"
ON public.email_subscriptions
FOR DELETE
USING (public.current_user_is_admin());

-- Add time-based access restriction for guests table to protect PII
-- Drop and recreate SELECT policy with time restriction
DROP POLICY IF EXISTS "Users can view guests in their hotels" ON public.guests;

CREATE POLICY "Users can view recent guests in their hotels"
ON public.guests
FOR SELECT
USING (
  EXISTS (
    SELECT 1
    FROM public.hotels
    WHERE hotels.id = guests.hotel_id
      AND hotels.owner_id = auth.uid()
  )
  AND (
    -- Allow access to active guests and guests within 90 days of checkout
    check_out_date IS NULL 
    OR check_out_date > (now() - interval '90 days')
  )
);