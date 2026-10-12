// Generated from the Supabase "studyflow" schema (mcp generate_typescript_types).
// Regenerate after schema changes rather than editing by hand.

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.18";
  };
  public: {
    Tables: {
      answers: {
        Row: {
          attempt_id: string;
          correct: boolean;
          created_at: string;
          id: number;
          question_id: string;
          topic_id: string;
          user_id: string;
        };
        Insert: {
          attempt_id: string;
          correct: boolean;
          created_at?: string;
          id?: never;
          question_id: string;
          topic_id: string;
          user_id: string;
        };
        Update: {
          attempt_id?: string;
          correct?: boolean;
          created_at?: string;
          id?: never;
          question_id?: string;
          topic_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "answers_attempt_id_fkey";
            columns: ["attempt_id"];
            isOneToOne: false;
            referencedRelation: "attempts";
            referencedColumns: ["id"];
          },
        ];
      };
      attempts: {
        Row: {
          created_at: string;
          id: string;
          mode: string;
          score: number;
          subject_id: string;
          topic_id: string | null;
          total: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          mode: string;
          score: number;
          subject_id: string;
          topic_id?: string | null;
          total: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          mode?: string;
          score?: number;
          subject_id?: string;
          topic_id?: string | null;
          total?: number;
          user_id?: string;
        };
        Relationships: [];
      };
      bookmarks: {
        Row: {
          created_at: string;
          question_id: string;
          subject_id: string;
          topic_id: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          question_id: string;
          subject_id: string;
          topic_id: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          question_id?: string;
          subject_id?: string;
          topic_id?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      notes: {
        Row: {
          body: string;
          subject_id: string;
          topic_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          body?: string;
          subject_id: string;
          topic_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          body?: string;
          subject_id?: string;
          topic_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      progress: {
        Row: {
          done: boolean;
          subject_id: string;
          topic_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          done?: boolean;
          subject_id: string;
          topic_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          done?: boolean;
          subject_id?: string;
          topic_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      review_queue: {
        Row: {
          due_at: string;
          interval_days: number;
          question_id: string;
          streak: number;
          subject_id: string;
          topic_id: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          due_at?: string;
          interval_days?: number;
          question_id: string;
          streak?: number;
          subject_id: string;
          topic_id: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          due_at?: string;
          interval_days?: number;
          question_id?: string;
          streak?: number;
          subject_id?: string;
          topic_id?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

type PublicSchema = Database["public"];

export type Tables<T extends keyof PublicSchema["Tables"]> = PublicSchema["Tables"][T]["Row"];
export type TablesInsert<T extends keyof PublicSchema["Tables"]> = PublicSchema["Tables"][T]["Insert"];
export type TablesUpdate<T extends keyof PublicSchema["Tables"]> = PublicSchema["Tables"][T]["Update"];
