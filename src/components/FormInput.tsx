export function FormInput({
  type,
  name,
  id,
  displayText,
}: {
  type: string;
  name: string;
  id: string;
  displayText: string;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name}>{displayText}</label>
      <input className="form-input" type={type} name={name} id={id} />
    </div>
  );
}
