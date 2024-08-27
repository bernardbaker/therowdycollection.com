import { Artists } from "./artists";

interface Props {
  value: {
    artists: {
      list: {
        name: string;
        image: string;
        url: string;
        link: string;
      }[];
    };
  };
}

export const ArtistsContainer = ({ value }: Props) => <Artists value={value} />;
