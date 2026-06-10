import { useEffect, useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { PyodideProvider } from './context/PyodideProvider'
import { PresenceProvider, usePresence } from './context/PresenceProvider'
import { SettingsProvider } from './context/SettingsProvider'
import AuthScreen from './screens/AuthScreen'
import ExamScreen from './screens/ExamScreen'
import DashboardScreen from './screens/DashboardScreen'
import ExerciseScreen from './screens/ExerciseScreen'
import SandboxScreen from './screens/SandboxScreen'
import AdminScreen from './screens/AdminScreen'

function Splash() {
  return (
    <div className="flex h-full items-center justify-center text-sm text-zinc-500">
      Chargement…
    </div>
  )
}

function Authenticated() {
  const { user } = useAuth()
  const { setActivity } = usePresence()
  const [view, setView] = useState('dashboard')
  const [exercise, setExercise] = useState(null)

  const takingExam = user.level == null || view === 'exam'

  useEffect(() => {
    const label = takingExam
      ? 'Examen'
      : view === 'sandbox'
        ? 'Bac à sable'
        : view === 'admin'
          ? 'Espace admin'
          : view === 'exercise' && exercise
            ? `Exercice : ${exercise.title}`
            : 'Tableau de bord'
    setActivity(label)
  }, [takingExam, view, exercise, setActivity])

  if (user.level == null) {
    return <ExamScreen onDone={() => setView('dashboard')} />
  }

  if (view === 'exam') {
    return <ExamScreen onDone={() => setView('dashboard')} onCancel={() => setView('dashboard')} />
  }

  if (view === 'sandbox') {
    return <SandboxScreen onBack={() => setView('dashboard')} />
  }

  if (view === 'admin') {
    return <AdminScreen onBack={() => setView('dashboard')} />
  }

  if (view === 'exercise' && exercise) {
    return (
      <ExerciseScreen
        exercise={exercise}
        levelId={user.level}
        onBack={() => setView('dashboard')}
      />
    )
  }

  return (
    <DashboardScreen
      onStartExercise={(e) => {
        setExercise(e)
        setView('exercise')
      }}
      onRetakeExam={() => setView('exam')}
      onSandbox={() => setView('sandbox')}
      onAdmin={() => setView('admin')}
    />
  )
}

function Shell() {
  const { user, loading } = useAuth()
  if (loading) return <Splash />
  if (!user) return <AuthScreen />
  return (
    <PyodideProvider>
      <PresenceProvider>
        <SettingsProvider>
          <Authenticated />
        </SettingsProvider>
      </PresenceProvider>
    </PyodideProvider>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  )
}
