-- Add database constraints and indexes for security and data integrity

-- Add unique constraints to prevent duplicate email subscriptions
ALTER TABLE public.email_subscriptions 
ADD CONSTRAINT email_subscriptions_email_unique UNIQUE (email);

-- Add length constraints for security
ALTER TABLE public.contact_submissions 
ADD CONSTRAINT contact_submissions_name_length CHECK (length(name) <= 100);

ALTER TABLE public.contact_submissions 
ADD CONSTRAINT contact_submissions_email_length CHECK (length(email) <= 255);

ALTER TABLE public.contact_submissions 
ADD CONSTRAINT contact_submissions_message_length CHECK (length(message) <= 2000);

ALTER TABLE public.email_subscriptions 
ADD CONSTRAINT email_subscriptions_email_length CHECK (length(email) <= 255);

-- Add NOT NULL constraints for critical fields
ALTER TABLE public.profiles 
ALTER COLUMN email SET NOT NULL;

-- Add indexes for better performance on frequently queried fields
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON public.contact_submissions (submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions (status);
CREATE INDEX IF NOT EXISTS idx_email_subscriptions_subscribed_at ON public.email_subscriptions (subscribed_at DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles (email);

-- Add email format validation constraint
ALTER TABLE public.contact_submissions 
ADD CONSTRAINT contact_submissions_email_format CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE public.email_subscriptions 
ADD CONSTRAINT email_subscriptions_email_format CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE public.profiles 
ADD CONSTRAINT profiles_email_format CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');