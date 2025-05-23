export default async function useFetchProperties() {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/property?&_embed=true`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    
  }

  return { data };
}
