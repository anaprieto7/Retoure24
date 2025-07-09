// app/(app)/dashboardRouter/page.tsx

import { getUserFromSession } from '@/lib/auth/session'
import DashboardView from '@/components/dashboard/DashboardView'
import DashboardGlobalView from '@/components/dashboard/DashboardGlobalView'

export default async function Page() {
  const user = await getUserFromSession()
  const shopIds = user?.shopIds || []

  if (!user) return <p>Usuario no autenticado</p>

  if (shopIds.length === 1) {
    return <DashboardView shopId={shopIds[0]} />
  }

  if (shopIds.length > 1) {
    return <DashboardGlobalView shopIds={shopIds} />
  }

  return <p>No tienes tiendas asignadas</p>
}
