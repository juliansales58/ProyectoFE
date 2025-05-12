import { DynamicButton } from '@/lib/ui'
import { CloseOutlined } from '@mui/icons-material'
import toast, { ToastBar, Toaster } from 'react-hot-toast'

const DynamicToast = () => {
  return (
    <Toaster
      toastOptions={{ duration: 8000 }}
      position='bottom-left'
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
              {t.type !== 'loading' && (
                <DynamicButton
                  color='black'
                  onClick={() => toast.dismiss(t.id)}
                >
                  <CloseOutlined />
                </DynamicButton>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
}

export default DynamicToast
