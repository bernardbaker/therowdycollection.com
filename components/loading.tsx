import Image from "next/image";

interface Props {
  bg: string;
  filter: string;
  text: string;
}

export const Loading = ({ bg, filter, text }: Props) => {
  return (
    <main
      className="flex flex-col min-h-screen overflow-hidden justify-center items-center"
      style={{
        backgroundColor: bg,
      }}
    >
      <Image
        src={"/images/rowdywellness.com.silhouette.png"}
        height={200}
        width={200}
        alt="The Rowdy Wellness logo"
        priority
        style={{
          filter: filter,
        }}
      />
      <h1 className="text-2xl font-bold" style={{ color: text }}>
        LOADING
      </h1>
    </main>
  );
};
