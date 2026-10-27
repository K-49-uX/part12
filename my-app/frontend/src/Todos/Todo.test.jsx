/** @vitest-environment jsdom */
import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Todo from './Todo'

afterEach(cleanup)

describe('Todo', () => {
  it('renders an unfinished todo and calls its actions', () => {
    const todo = { _id: 'todo-1', text: 'Write a component test', done: false }
    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

    expect(screen.getByText(todo.text)).toBeTruthy()
    expect(screen.getByText('This todo is not done')).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: /delete/i }))
    fireEvent.click(screen.getByRole('button', { name: /set as done/i }))

    expect(deleteTodo).toHaveBeenCalledWith(todo)
    expect(completeTodo).toHaveBeenCalledWith(todo)
  })

  it('shows the completed state without a completion button', () => {
    const todo = { _id: 'todo-2', text: 'Already complete', done: true }

    render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)

    expect(screen.getByText('This todo is done')).toBeTruthy()
    expect(screen.queryByRole('button', { name: /set as done/i })).toBeNull()
  })
})
