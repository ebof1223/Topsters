import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
interface Props {
  openHowTo: boolean;
  setOpenHowTo: (i: boolean) => void;
}
const HowToUse: React.FC<Props> = ({ openHowTo, setOpenHowTo }) => {
  const [checked, setChecked] = useState(false);
  const handleClose = () => {
    if (checked) setOpenHowTo(false);
  };
  console.log(checked);
  return (
    <div>
      <Dialog
        open={openHowTo}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title" style={{ fontSize: '5rem' }}>
          How to use
        </DialogTitle>
        <DialogContent>
          <ol>
            <li>
              Begin by typing your favorite artist and hitting enter before the
              timer expires.
            </li>
            <li>
              A drawer populated with your artists catalog will be displayed on
              the left-hand side of the screen. Click on any album to add it to
              your topster.
            </li>
            <li>You can edit your topster with the drag and drop feature.</li>
            <li>
              Save your topster using the submit button. Give it a cool name!
            </li>
          </ol>
        </DialogContent>
        <DialogActions>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                name="checkedB"
                color="primary"
                onChange={() => setChecked(!checked)}
              />
            }
            label="Don't show again"
          />
          <Button onClick={handleClose} color="primary">
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default HowToUse;
