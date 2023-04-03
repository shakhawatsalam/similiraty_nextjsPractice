import { CreateApiData } from "@/types/api";


export async function createApiKey() {
   console.log('hello im here');
   
   const res = await fetch("/api/api-key/create");
   console.log(res, "im res");
   
   const data = (await res.json()) as CreateApiData;
 
   if (data.error || !data.createdApiKey) {
     if (data.error instanceof Array) {
       throw new Error(data.error.join(", "));
     }
     throw new Error(data.error ?? "Something Went Wrong.");
   }
   return data.createdApiKey.key;
}
