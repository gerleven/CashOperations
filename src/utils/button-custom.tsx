import Button from '@mui/material/Button';

export default function CustomButton(textButton: string, handleClick: Function) {
  return <Button variant="contained" onClick={()=>handleClick}>{textButton}</Button>;
}