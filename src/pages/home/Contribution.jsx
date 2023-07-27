import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const selectLastHalfYear = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter(activity => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const Contribution = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <Box align="center" sx={{ bgcolor: 'black', pt: 6, pb: 6, color: 'white' }}>
      <GitHubCalendar
        colorScheme='dark'
        username="edenagar"
        transformData={isSmallScreen ? selectLastHalfYear : undefined}
        labels={isSmallScreen ? {
            totalCount: '{{count}} contributions in the last half year',
          } : undefined}
        hideColorLegend
      />
    </Box>
  );
};

export default Contribution;

