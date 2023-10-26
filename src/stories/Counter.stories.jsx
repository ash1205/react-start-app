import Counter from "../components/Counter";
export default {
  title: "Counter",
  component: Counter,
  tags: ["autodocs"],
};

export const Default = (args) => <Counter {...args} />;
