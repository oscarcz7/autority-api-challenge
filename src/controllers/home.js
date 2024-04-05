import db from '@/database';

export const index = (req, res) => res.send('Hello World!');

/**
 *  Return all tasks
 * @returns tasks object
 */
export const tasks = async (req, res) => {
  const todos = await db.models.todo.findAll();
  return res.json({ success: true, data: todos });
};

/**
 * Return task by id
 * @returns task object
 */
export const taskById = async (req, res) => {
  try {
    const { id } = req.params;
    const condition = { id };

    const todo = await db.models.todo.findOne({ where: condition });

    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    return res.json({ success: true, data: todo });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Create a new task
 * @returns task object
 */
export const createTask = async (req, res) => {
  try {
    const {
      name, description, author, isComplete,
    } = req.body;
    // eslint-disable-next-line new-cap
    const newTodo = new db.models.todo({
      name,
      description,
      author,
      isComplete,
    });
    await newTodo.save();

    return res.status(201).json({ success: true, data: newTodo });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Update a task by id
 * @returns task obj updated
 */
export const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, description, author, isComplete,
    } = req.body;

    const todo = await db.models.todo.findOne({ where: { id } });

    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }

    await db.models.todo.update(
      {
        name,
        description,
        author,
        isComplete,
      },
      { where: { id } },
    );

    const updatedTodo = await db.models.todo.findByPk(id);

    return res.json({ success: true, data: updatedTodo });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

/**
 * Delete a task by id
 * @returns response of deleted
 */
export const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.models.todo.findOne({ where: { id } });

    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    await db.models.todo.destroy({ where: { id } });

    return res.json({ success: true, message: 'Todo deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
