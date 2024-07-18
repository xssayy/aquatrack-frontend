import { Box, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ProgressContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ProgressLabel = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 8,
});

const ProgressBar = ({ value }) => {
  return (
    <ProgressContainer>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 9,
          width: '100%',
          backgroundColor: '#f0eff4',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#9be1a0',
            borderRadius: 9,
          },
        }}
      />
      <ProgressLabel>
        <Typography variant="body2" color="text.secondary">
          0%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          50%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          100%
        </Typography>
      </ProgressLabel>
    </ProgressContainer>
  );
};

export default ProgressBar;
