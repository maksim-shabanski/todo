import React from 'react';
import { connect } from 'react-redux';

import {
  addTask,
  removeTask,
  completeTask,
  updateTaskText,
} from 'actions/actionCreators';
import Todos from 'components/Todos';

const TodoContainer = props => <Todos {...props} />;

const mapStateToProps = ({ todos }) => ({
  todos,
});

const mapDispatchToProps = dispatch => ({
  addTaskToStore: (id, text, isCompleted) =>
    dispatch(addTask(id, text, isCompleted)),
  removeTaskFromStore: id => dispatch(removeTask(id)),
  completeTask: id => dispatch(completeTask(id)),
  updateTaskText: (id, text) => dispatch(updateTaskText(id, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
