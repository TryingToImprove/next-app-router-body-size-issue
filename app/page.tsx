import { TEXT } from "./CONTENT";

export default function Home() {
  async function onSubmit(formData: FormData) {
    "use server";

    const item = formData.get("text");

    if (typeof item === "string" && item.length !== TEXT.length) {
      throw new Error(
        `Expected item.length to be ${TEXT.length}, was ${
          item.length
        }; Around ${
          Buffer.from(item).byteLength / 1024 / 1024
        }MB, but text is ${Buffer.from(TEXT).length / 1024 / 1024}MB`
      );
    }
  }

  return (
    <form action={onSubmit}>
      <input type="hidden" name="text" value={TEXT} />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
