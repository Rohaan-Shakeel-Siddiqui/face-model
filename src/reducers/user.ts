interface Props {
  auth: boolean;
  data: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    entries: number;
  } | null;
}

const initialState = {
  auth: false,
  data: null,
};

export const userReducer = (
  _state: Props = initialState,
  action: { type: "SET_USER" | "CLEAR_USER" | string; payload: Props["data"] }
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        data: action.payload,
        auth: true,
      };
    case "CLEAR_USER":
      return {
        data: null,
        auth: false,
      };
    default:
      return initialState;
  }
};
