interface Props {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  entries: number;
}

export const login = (data: Props | null) => {
  return { type: "SET_USER", payload: data };
};

export const logout = () => {
  return { type: "CLEAR_USER" };
};
