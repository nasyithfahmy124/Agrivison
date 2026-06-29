import os
from django.core.files.storage import Storage
from django.core.files.base import ContentFile
from supabase import create_client, Client

class SupabaseStorage(Storage):
    def __init__(self):
        self.url = os.environ.get("SUPABASE_URL")
        self.key = os.environ.get("SUPABASE_ANON_KEY")
        self.bucket_name = os.environ.get("SUPABASE_BUCKET_NAME", "agrivision-storage")
        
        if not self.url or not self.key:
            raise ValueError("SUPABASE_URL dan SUPABASE_ANON_KEY harus diatur di Environment Variables!")
            
        self.supabase: Client = create_client(self.url, self.key)

    def _save(self, name, content):
        clean_name = name.replace('\\', '/')
        file_data = content.read()
        
        self.supabase.storage.from_(self.bucket_name).upload(
            path=clean_name,
            file=file_data,
            file_options={"cache-control": "3600", "upsert": "true"}
        )
        return clean_name

    def url(self, name):
        clean_name = name.replace('\\', '/')
        return f"{self.url}/storage/v1/object/public/{self.bucket_name}/{clean_name}"

    def exists(self, name):
        return False