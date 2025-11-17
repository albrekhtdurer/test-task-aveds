type ButtonProps = {
  children: string;
}

export const Button = (props: ButtonProps) => {
  const {children} = props;
  return <button>{children}</button>;
}