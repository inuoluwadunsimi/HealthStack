import { Box, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../components';
import { BottomWrapper } from '../components/styles';
import { DashboardPageWrapper, GridWrapper } from '../core-ui/styles';
import { ButtonGroup, GrayWrapper, HeadWrapper } from './styles';

interface DetailViewProps {
  title: string;
  onEdit?: () => void;
  onDelete?: () => void;
  backClick?: () => void;
  value?: any;
  children?: React.ReactNode;
  hasBottomNavigation?: boolean;
  bottomNavChildren?: React.ReactNode;
}

const DetailView: React.FC<DetailViewProps> = ({
  title,
  onEdit,
  onDelete,
  value,
  backClick,
  children,
  hasBottomNavigation,
  bottomNavChildren,
}) => {
  return (
    <DashboardPageWrapper>
      <GrayWrapper>
        <HeadWrapper>
          <Box>
            <Typography variant='h2'>{title} Details</Typography>
            <Typography>Below are your {title}’s details</Typography>
          </Box>

          <ButtonGroup>
            <Button
              label='Back to List'
              background='#fdfdfd'
              color='#333'
              onClick={backClick}
            />
            <Button
              label={'Delete'}
              background='#FFE9E9'
              color='#ED0423'
              showicon={true}
              icon='bi bi-pen-fill'
              onClick={onDelete}
            />
            <Button
              label={'Edit Details'}
              background={'#ECF3FF'}
              color='#0364FF'
              showicon={true}
              icon='bi bi-pen-fill'
              onClick={onEdit}
            />
          </ButtonGroup>
        </HeadWrapper>
        <GridWrapper>{children}</GridWrapper>

        {hasBottomNavigation && (
          <BottomWrapper>
            <ButtonGroup>{bottomNavChildren}</ButtonGroup>
          </BottomWrapper>
        )}
      </GrayWrapper>
    </DashboardPageWrapper>
  );
};

export default DetailView;
