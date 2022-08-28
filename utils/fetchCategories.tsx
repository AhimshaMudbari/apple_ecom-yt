export const fetchCategories = async () => {
  const res = await fetch(`${process.env.NEXT_URL}/api/getCategories`)

  const data = await res.json();
  console.log(data);

}