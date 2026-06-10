import { EXAM_QUESTIONS } from '../data/examQuestions'
import { clampLevel } from './levels'

export const EXAM_LENGTH = 8
const START_ABILITY = 2
const STEP_UP = 0.6
const STEP_DOWN = 0.8

function clampAbility(value) {
  return Math.min(4, Math.max(0, value))
}

function shuffleChoices(question) {
  const order = question.choices.map((_, i) => i)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[order[i], order[j]] = [order[j], order[i]]
  }
  return {
    ...question,
    choices: order.map((i) => question.choices[i]),
    answer: order.indexOf(question.answer),
  }
}

export function createExam() {
  return { ability: START_ABILITY, asked: [], answers: [], byConcept: {} }
}

export function isFinished(state) {
  const remaining = EXAM_QUESTIONS.filter((q) => !state.asked.includes(q.id))
  return state.asked.length >= EXAM_LENGTH || remaining.length === 0
}

export function nextQuestion(state) {
  const remaining = EXAM_QUESTIONS.filter((q) => !state.asked.includes(q.id))
  if (remaining.length === 0) return null
  const target = clampLevel(state.ability)
  let closest = Infinity
  for (const q of remaining) closest = Math.min(closest, Math.abs(q.level - target))
  const pool = remaining.filter((q) => Math.abs(q.level - target) === closest)
  return shuffleChoices(pool[Math.floor(Math.random() * pool.length)])
}

export function submitAnswer(state, question, choiceIndex) {
  const correct = choiceIndex === question.answer
  const ability = clampAbility(state.ability + (correct ? STEP_UP : -STEP_DOWN))
  const concept = question.concept
  const previous = state.byConcept[concept] ?? { correct: 0, total: 0 }
  return {
    ability,
    asked: [...state.asked, question.id],
    answers: [...state.answers, { id: question.id, level: question.level, correct }],
    byConcept: {
      ...state.byConcept,
      [concept]: { correct: previous.correct + (correct ? 1 : 0), total: previous.total + 1 },
    },
  }
}

export function computeResult(state) {
  const total = state.answers.length
  const score = state.answers.filter((a) => a.correct).length
  return { level: clampLevel(state.ability), score, total, byConcept: state.byConcept }
}
