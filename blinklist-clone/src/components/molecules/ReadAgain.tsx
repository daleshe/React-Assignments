import { Stack } from "@mui/material";
import { COLORS } from "../../constants";
import CardBody1 from "../atoms/CardBody1";
import API from "../../api";

type ReadAgainProps = {
  val: booktype;
};

type booktype = {
  id: number;
  title: string;
  author: string;
  time: number;
  reads: string;
  status: string;
  trending: boolean;
  latest: boolean;
  audio: boolean;
};

export default function ReadAgain(props: ReadAgainProps) {
  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const book = props.val;
    book["status"] = "reading";
    const response = await API.delete(`books/${book.id}`);
    API.post(`http://localhost:3333/books`, book);
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={2}
      sx={{
        width: "330px",
        backgroundColor: "white",
        color: COLORS.BRIGHT_BLUE,
        border: "1px solid " + COLORS.SHADOW_GREY,
        paddingTop: "10px",
        paddingBottom: "10px",
        "&:hover": {
          backgroundColor: COLORS.BRIGHT_BLUE,
          color: "white",
        },
      }}
      onClick={handleClick}
    >
      <CardBody1 name="Read Again" color={COLORS.BRIGHT_BLUE} />
    </Stack>
  );
}