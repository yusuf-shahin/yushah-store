import { useNavigation } from "react-router-dom"

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  return (
    <div>
      <button
        type='submit'
        className='btn btn-primary btn-block'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className='loading loading-spinner text-error'></span>
            sending...
          </>
        ) : (
          text || "Submit"
        )}
      </button>
    </div>
  )
}

export default SubmitBtn
