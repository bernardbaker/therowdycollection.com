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
      <h1 className="text-2xl font-bold" style={{ color: text }}>
        LOADING
      </h1>
    </main>
  );
};
