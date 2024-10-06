DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('open', 'paid', 'void', 'uncollectible');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"createTs" timestamp with time zone DEFAULT now() NOT NULL,
	"value" integer NOT NULL,
	"description" text NOT NULL,
	"status" "status" NOT NULL
);
